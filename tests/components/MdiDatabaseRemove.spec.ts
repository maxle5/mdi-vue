
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseRemove from "../../src/components/MdiDatabaseRemove.vue";

test("MdiDatabaseRemove snapshot", () => {
  const wrapper = mount(MdiDatabaseRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
