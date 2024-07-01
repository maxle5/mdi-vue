
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseArrowUp from "../../src/components/MdiDatabaseArrowUp.vue";

test("MdiDatabaseArrowUp snapshot", () => {
  const wrapper = mount(MdiDatabaseArrowUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
