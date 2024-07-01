
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeSoundOutOutline from "../../src/components/MdiHomeSoundOutOutline.vue";

test("MdiHomeSoundOutOutline snapshot", () => {
  const wrapper = mount(MdiHomeSoundOutOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
