
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseRemoveOutline from "../../src/components/MdiDatabaseRemoveOutline.vue";

test("MdiDatabaseRemoveOutline snapshot", () => {
  const wrapper = mount(MdiDatabaseRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
