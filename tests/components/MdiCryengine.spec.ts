
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCryengine from "../../src/components/MdiCryengine.vue";

test("MdiCryengine snapshot", () => {
  const wrapper = mount(MdiCryengine, {});
  expect(wrapper.html()).toMatchSnapshot();
});
