
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileCertificateOutline from "../../src/components/MdiFileCertificateOutline.vue";

test("MdiFileCertificateOutline snapshot", () => {
  const wrapper = mount(MdiFileCertificateOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
