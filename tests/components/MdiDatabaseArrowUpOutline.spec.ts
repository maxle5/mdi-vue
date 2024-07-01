
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseArrowUpOutline from "../../src/components/MdiDatabaseArrowUpOutline.vue";

test("MdiDatabaseArrowUpOutline snapshot", () => {
  const wrapper = mount(MdiDatabaseArrowUpOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
