
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSearchWeb from "../../src/components/MdiSearchWeb.vue";

test("MdiSearchWeb snapshot", () => {
  const wrapper = mount(MdiSearchWeb, {});
  expect(wrapper.html()).toMatchSnapshot();
});
