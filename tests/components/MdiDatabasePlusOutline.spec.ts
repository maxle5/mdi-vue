
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabasePlusOutline from "../../src/components/MdiDatabasePlusOutline.vue";

test("MdiDatabasePlusOutline snapshot", () => {
  const wrapper = mount(MdiDatabasePlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
