
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeSoundOut from "../../src/components/MdiHomeSoundOut.vue";

test("MdiHomeSoundOut snapshot", () => {
  const wrapper = mount(MdiHomeSoundOut, {});
  expect(wrapper.html()).toMatchSnapshot();
});
