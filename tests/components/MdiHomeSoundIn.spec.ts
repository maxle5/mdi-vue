
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeSoundIn from "../../src/components/MdiHomeSoundIn.vue";

test("MdiHomeSoundIn snapshot", () => {
  const wrapper = mount(MdiHomeSoundIn, {});
  expect(wrapper.html()).toMatchSnapshot();
});
