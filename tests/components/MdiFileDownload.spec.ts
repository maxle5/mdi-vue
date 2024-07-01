
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileDownload from "../../src/components/MdiFileDownload.vue";

test("MdiFileDownload snapshot", () => {
  const wrapper = mount(MdiFileDownload, {});
  expect(wrapper.html()).toMatchSnapshot();
});
