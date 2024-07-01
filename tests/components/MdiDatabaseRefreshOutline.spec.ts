
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseRefreshOutline from "../../src/components/MdiDatabaseRefreshOutline.vue";

test("MdiDatabaseRefreshOutline snapshot", () => {
  const wrapper = mount(MdiDatabaseRefreshOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
