
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseOff from "../../src/components/MdiDatabaseOff.vue";

test("MdiDatabaseOff snapshot", () => {
  const wrapper = mount(MdiDatabaseOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
