
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSignature from "../../src/components/MdiSignature.vue";

test("MdiSignature snapshot", () => {
  const wrapper = mount(MdiSignature, {});
  expect(wrapper.html()).toMatchSnapshot();
});
