
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiProgressDownload from "../../src/components/MdiProgressDownload.vue";

test("MdiProgressDownload snapshot", () => {
  const wrapper = mount(MdiProgressDownload, {});
  expect(wrapper.html()).toMatchSnapshot();
});
