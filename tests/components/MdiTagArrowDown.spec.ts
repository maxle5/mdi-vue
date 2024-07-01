
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTagArrowDown from "../../src/components/MdiTagArrowDown.vue";

test("MdiTagArrowDown snapshot", () => {
  const wrapper = mount(MdiTagArrowDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
