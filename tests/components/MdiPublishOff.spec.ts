
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPublishOff from "../../src/components/MdiPublishOff.vue";

test("MdiPublishOff snapshot", () => {
  const wrapper = mount(MdiPublishOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
