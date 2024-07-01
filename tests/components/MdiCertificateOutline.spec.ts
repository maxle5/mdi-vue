
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCertificateOutline from "../../src/components/MdiCertificateOutline.vue";

test("MdiCertificateOutline snapshot", () => {
  const wrapper = mount(MdiCertificateOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
