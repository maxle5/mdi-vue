
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCellphoneCog from "../../src/components/MdiCellphoneCog.vue";

test("MdiCellphoneCog snapshot", () => {
  const wrapper = mount(MdiCellphoneCog, {});
  expect(wrapper.html()).toMatchSnapshot();
});
