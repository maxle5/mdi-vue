
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseArrowDown from "../../src/components/MdiDatabaseArrowDown.vue";

test("MdiDatabaseArrowDown snapshot", () => {
  const wrapper = mount(MdiDatabaseArrowDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
