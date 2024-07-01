
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseSearchOutline from "../../src/components/MdiDatabaseSearchOutline.vue";

test("MdiDatabaseSearchOutline snapshot", () => {
  const wrapper = mount(MdiDatabaseSearchOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
