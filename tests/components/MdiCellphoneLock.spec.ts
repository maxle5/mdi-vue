
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCellphoneLock from "../../src/components/MdiCellphoneLock.vue";

test("MdiCellphoneLock snapshot", () => {
  const wrapper = mount(MdiCellphoneLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
