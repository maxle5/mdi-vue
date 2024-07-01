
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPanorama from "../../src/components/MdiPanorama.vue";

test("MdiPanorama snapshot", () => {
  const wrapper = mount(MdiPanorama, {});
  expect(wrapper.html()).toMatchSnapshot();
});
