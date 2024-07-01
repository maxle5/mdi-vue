
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileCad from "../../src/components/MdiFileCad.vue";

test("MdiFileCad snapshot", () => {
  const wrapper = mount(MdiFileCad, {});
  expect(wrapper.html()).toMatchSnapshot();
});
