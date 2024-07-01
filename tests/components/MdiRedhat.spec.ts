
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRedhat from "../../src/components/MdiRedhat.vue";

test("MdiRedhat snapshot", () => {
  const wrapper = mount(MdiRedhat, {});
  expect(wrapper.html()).toMatchSnapshot();
});
