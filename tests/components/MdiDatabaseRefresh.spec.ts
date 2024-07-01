
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseRefresh from "../../src/components/MdiDatabaseRefresh.vue";

test("MdiDatabaseRefresh snapshot", () => {
  const wrapper = mount(MdiDatabaseRefresh, {});
  expect(wrapper.html()).toMatchSnapshot();
});
