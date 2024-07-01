
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDivision from "../../src/components/MdiDivision.vue";

test("MdiDivision snapshot", () => {
  const wrapper = mount(MdiDivision, {});
  expect(wrapper.html()).toMatchSnapshot();
});
