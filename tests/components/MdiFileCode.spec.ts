
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileCode from "../../src/components/MdiFileCode.vue";

test("MdiFileCode snapshot", () => {
  const wrapper = mount(MdiFileCode, {});
  expect(wrapper.html()).toMatchSnapshot();
});
