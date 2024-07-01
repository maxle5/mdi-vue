
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCellphoneDock from "../../src/components/MdiCellphoneDock.vue";

test("MdiCellphoneDock snapshot", () => {
  const wrapper = mount(MdiCellphoneDock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
