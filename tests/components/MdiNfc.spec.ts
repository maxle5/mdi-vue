
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNfc from "../../src/components/MdiNfc.vue";

test("MdiNfc snapshot", () => {
  const wrapper = mount(MdiNfc, {});
  expect(wrapper.html()).toMatchSnapshot();
});
