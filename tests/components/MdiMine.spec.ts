
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMine from "../../src/components/MdiMine.vue";

test("MdiMine snapshot", () => {
  const wrapper = mount(MdiMine, {});
  expect(wrapper.html()).toMatchSnapshot();
});
