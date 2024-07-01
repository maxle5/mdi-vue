
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileTable from "../../src/components/MdiFileTable.vue";

test("MdiFileTable snapshot", () => {
  const wrapper = mount(MdiFileTable, {});
  expect(wrapper.html()).toMatchSnapshot();
});
