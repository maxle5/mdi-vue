
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseOutline from "../../src/components/MdiDatabaseOutline.vue";

test("MdiDatabaseOutline snapshot", () => {
  const wrapper = mount(MdiDatabaseOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
