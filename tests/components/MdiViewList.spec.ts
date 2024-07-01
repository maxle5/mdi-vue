
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewList from "../../src/components/MdiViewList.vue";

test("MdiViewList snapshot", () => {
  const wrapper = mount(MdiViewList, {});
  expect(wrapper.html()).toMatchSnapshot();
});
