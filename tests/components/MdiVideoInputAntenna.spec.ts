
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVideoInputAntenna from "../../src/components/MdiVideoInputAntenna.vue";

test("MdiVideoInputAntenna snapshot", () => {
  const wrapper = mount(MdiVideoInputAntenna, {});
  expect(wrapper.html()).toMatchSnapshot();
});
