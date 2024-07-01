
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseSearch from "../../src/components/MdiDatabaseSearch.vue";

test("MdiDatabaseSearch snapshot", () => {
  const wrapper = mount(MdiDatabaseSearch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
