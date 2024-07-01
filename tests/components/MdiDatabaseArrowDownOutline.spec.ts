
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseArrowDownOutline from "../../src/components/MdiDatabaseArrowDownOutline.vue";

test("MdiDatabaseArrowDownOutline snapshot", () => {
  const wrapper = mount(MdiDatabaseArrowDownOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
