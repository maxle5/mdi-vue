
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseMinusOutline from "../../src/components/MdiDatabaseMinusOutline.vue";

test("MdiDatabaseMinusOutline snapshot", () => {
  const wrapper = mount(MdiDatabaseMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
