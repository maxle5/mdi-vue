
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHumanBabyChangingTable from "../../src/components/MdiHumanBabyChangingTable.vue";

test("MdiHumanBabyChangingTable snapshot", () => {
  const wrapper = mount(MdiHumanBabyChangingTable, {});
  expect(wrapper.html()).toMatchSnapshot();
});
