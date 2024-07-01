
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBlenderSoftware from "../../src/components/MdiBlenderSoftware.vue";

test("MdiBlenderSoftware snapshot", () => {
  const wrapper = mount(MdiBlenderSoftware, {});
  expect(wrapper.html()).toMatchSnapshot();
});
