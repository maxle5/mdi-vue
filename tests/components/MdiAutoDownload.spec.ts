
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAutoDownload from "../../src/components/MdiAutoDownload.vue";

test("MdiAutoDownload snapshot", () => {
  const wrapper = mount(MdiAutoDownload, {});
  expect(wrapper.html()).toMatchSnapshot();
});
