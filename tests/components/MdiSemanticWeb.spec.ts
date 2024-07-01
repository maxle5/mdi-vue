
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSemanticWeb from "../../src/components/MdiSemanticWeb.vue";

test("MdiSemanticWeb snapshot", () => {
  const wrapper = mount(MdiSemanticWeb, {});
  expect(wrapper.html()).toMatchSnapshot();
});
