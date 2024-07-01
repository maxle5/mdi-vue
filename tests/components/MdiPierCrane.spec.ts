
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPierCrane from "../../src/components/MdiPierCrane.vue";

test("MdiPierCrane snapshot", () => {
  const wrapper = mount(MdiPierCrane, {});
  expect(wrapper.html()).toMatchSnapshot();
});
