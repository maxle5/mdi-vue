
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeb from "../../src/components/MdiWeb.vue";

test("MdiWeb snapshot", () => {
  const wrapper = mount(MdiWeb, {});
  expect(wrapper.html()).toMatchSnapshot();
});
