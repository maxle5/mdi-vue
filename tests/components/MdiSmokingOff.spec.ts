
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSmokingOff from "../../src/components/MdiSmokingOff.vue";

test("MdiSmokingOff snapshot", () => {
  const wrapper = mount(MdiSmokingOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
