
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseEditOutline from "../../src/components/MdiDatabaseEditOutline.vue";

test("MdiDatabaseEditOutline snapshot", () => {
  const wrapper = mount(MdiDatabaseEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
