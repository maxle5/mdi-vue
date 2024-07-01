
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUmbraco from "../../src/components/MdiUmbraco.vue";

test("MdiUmbraco snapshot", () => {
  const wrapper = mount(MdiUmbraco, {});
  expect(wrapper.html()).toMatchSnapshot();
});
