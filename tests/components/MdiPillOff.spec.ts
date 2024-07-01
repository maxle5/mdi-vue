
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPillOff from "../../src/components/MdiPillOff.vue";

test("MdiPillOff snapshot", () => {
  const wrapper = mount(MdiPillOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
