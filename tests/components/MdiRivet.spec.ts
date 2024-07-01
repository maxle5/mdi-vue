
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRivet from "../../src/components/MdiRivet.vue";

test("MdiRivet snapshot", () => {
  const wrapper = mount(MdiRivet, {});
  expect(wrapper.html()).toMatchSnapshot();
});
