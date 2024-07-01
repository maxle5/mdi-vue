
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeSoundInOutline from "../../src/components/MdiHomeSoundInOutline.vue";

test("MdiHomeSoundInOutline snapshot", () => {
  const wrapper = mount(MdiHomeSoundInOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
