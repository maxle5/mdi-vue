
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUnity from "../../src/components/MdiUnity.vue";

test("MdiUnity snapshot", () => {
  const wrapper = mount(MdiUnity, {});
  expect(wrapper.html()).toMatchSnapshot();
});
