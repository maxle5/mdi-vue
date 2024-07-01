
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPanoramaHorizontal from "../../src/components/MdiPanoramaHorizontal.vue";

test("MdiPanoramaHorizontal snapshot", () => {
  const wrapper = mount(MdiPanoramaHorizontal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
