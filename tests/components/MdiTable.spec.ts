
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTable from "../../src/components/MdiTable.vue";

test("MdiTable snapshot", () => {
  const wrapper = mount(MdiTable, {});
  expect(wrapper.html()).toMatchSnapshot();
});
